import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Barber {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  experience_years: number;
  image_url: string | null;
  slug: string;
  featured: boolean;
}

const AdminBarbers = () => {
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingBarber, setEditingBarber] = useState<Barber | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    specialties: "",
    experience_years: "0",
    image_url: "",
    slug: "",
    featured: false,
  });

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (!roles) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      loadBarbers();
    } catch (error) {
      console.error('Error checking admin:', error);
      navigate("/");
    }
  };

  const loadBarbers = async () => {
    try {
      const { data, error } = await supabase
        .from('barbers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBarbers(data || []);
    } catch (error) {
      console.error('Error loading barbers:', error);
      toast({
        title: "Error",
        description: "Failed to load barbers",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const barberData = {
        name: formData.name,
        title: formData.title,
        bio: formData.bio,
        specialties: formData.specialties.split(',').map(s => s.trim()),
        experience_years: parseInt(formData.experience_years),
        image_url: formData.image_url || null,
        slug: formData.slug,
        featured: formData.featured,
      };

      if (editingBarber) {
        const { error } = await supabase
          .from('barbers')
          .update(barberData)
          .eq('id', editingBarber.id);

        if (error) throw error;
        toast({ title: "Barber updated successfully" });
      } else {
        const { error } = await supabase
          .from('barbers')
          .insert(barberData);

        if (error) throw error;
        toast({ title: "Barber created successfully" });
      }

      setDialogOpen(false);
      resetForm();
      loadBarbers();
    } catch (error) {
      console.error('Error saving barber:', error);
      toast({
        title: "Error",
        description: "Failed to save barber",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this barber?")) return;

    try {
      const { error } = await supabase
        .from('barbers')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Barber deleted successfully" });
      loadBarbers();
    } catch (error) {
      console.error('Error deleting barber:', error);
      toast({
        title: "Error",
        description: "Failed to delete barber",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (barber: Barber) => {
    setEditingBarber(barber);
    setFormData({
      name: barber.name,
      title: barber.title,
      bio: barber.bio,
      specialties: barber.specialties.join(', '),
      experience_years: barber.experience_years.toString(),
      image_url: barber.image_url || "",
      slug: barber.slug,
      featured: barber.featured,
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setEditingBarber(null);
    setFormData({
      name: "",
      title: "",
      bio: "",
      specialties: "",
      experience_years: "0",
      image_url: "",
      slug: "",
      featured: false,
    });
  };

  if (!isAdmin || loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold">
              Manage <span className="text-gradient">Barbers</span>
            </h1>
            <Dialog open={dialogOpen} onOpenChange={(open) => {
              setDialogOpen(open);
              if (!open) resetForm();
            }}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 w-4 h-4" />
                  Add Barber
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingBarber ? "Edit Barber" : "Add New Barber"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Master Barber, Senior Stylist"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug (URL-friendly name)</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="e.g., john-smith"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialties">Specialties (comma-separated)</Label>
                    <Input
                      id="specialties"
                      value={formData.specialties}
                      onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
                      placeholder="e.g., Fades, Beards, Classic Cuts"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience_years">Years of Experience</Label>
                    <Input
                      id="experience_years"
                      type="number"
                      min="0"
                      value={formData.experience_years}
                      onChange={(e) => setFormData({ ...formData, experience_years: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="image_url">Image URL</Label>
                    <Input
                      id="image_url"
                      type="url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                    />
                    <Label htmlFor="featured">Feature on homepage</Label>
                  </div>
                  <Button type="submit" className="w-full">
                    {editingBarber ? "Update Barber" : "Create Barber"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Barbers</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {barbers.map((barber) => (
                    <TableRow key={barber.id}>
                      <TableCell className="font-medium">{barber.name}</TableCell>
                      <TableCell>{barber.title}</TableCell>
                      <TableCell>{barber.experience_years} years</TableCell>
                      <TableCell>{barber.featured ? "Yes" : "No"}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(barber)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(barber.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminBarbers;
