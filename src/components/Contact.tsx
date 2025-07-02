import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshitashetty43@gmail.com",
      href: "mailto:akshitashetty43@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Akshita3104",
      href: "https://github.com/Akshita3104",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/akshita-shetty-2004s",
      href: "https://linkedin.com/in/akshita-shetty-2004s",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">GET_IN_TOUCH</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-neon-purple mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities in AI, Machine
                Learning, and Full Stack Development. Whether you're looking for
                collaboration on innovative projects or have an exciting role to
                discuss, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="cyber-card hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-share-tech text-sm text-neon-pink uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-white group-hover:text-neon-purple transition-colors">
                          {value}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-white/70 text-sm">
                📍 Based in Mumbai, India
                <br />
                📞 Phone: +91 9867022557
                <br />
                🌍 Open to remote opportunities worldwide
              </p>
            </div>
          </div>

          <Card className="cyber-card">
            <div className="space-y-6">
              <div>
                <h3 className="font-orbitron text-xl font-bold text-neon-pink mb-2">
                  Send a Message
                </h3>
                <p className="text-white/70 text-sm">
                  Drop me a line and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-share-tech text-neon-purple mb-2"
                  >
                    NAME
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-neon-purple"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-share-tech text-neon-purple mb-2"
                  >
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-neon-purple"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-share-tech text-neon-purple mb-2"
                  >
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-neon-purple resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button type="submit" className="cyber-button w-full">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
