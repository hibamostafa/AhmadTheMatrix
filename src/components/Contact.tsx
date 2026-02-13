import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoP0u6uyNFmTqrYOHz7o-FY82hz-dtW-I",
  authDomain: "ahmed-effd6.firebaseapp.com",
  projectId: "ahmed-effd6",
  storageBucket: "ahmed-effd6.firebasestorage.app",
  messagingSenderId: "1059277448571",
  appId: "1:1059277448571:web:1da4d37f3fb4c79de789de",
  measurementId: "G-WQDDPJ0ZCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  phone: z.string().trim().min(10, { message: "Invalid phone number" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, "contacts"), {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        timestamp: serverTimestamp(),
        status: "new" // يمكنك إضافة status للتتبع
      });

      console.log("Document written with ID: ", docRef.id);

      // Send email via EmailJS (optional - يمكنك إزالته إذا أردت)
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        message: data.message,
      };

      await emailjs.send(
        "service_umicouq",
        "template_3huenxc",
        templateParams,
        "1xOsh1llBf4BJ4lyv"
      );

      toast.success("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      toast.error("❌ Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Let's Connect!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill the form and I will get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card className="shadow-medium border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:Ahmed.ramadan@mail.com">
                        Ahmed.ramadan@mail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p>+20 122 533 9909</p>
                      <p>+20 109 132 5011</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p>Sidi Gaber<br/>Alexandria, Egypt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="md:col-span-2 shadow-strong border-none">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+20 XXX XXX XXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea rows={6} placeholder="How can we help you?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                  </form>
                </Form>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;