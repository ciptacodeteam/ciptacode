"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PHONE_NUMBER } from "@/lib/constant";
import { sendWhatsappMessage } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle,
  Database,
  Globe,
  Send,
  Smartphone,
  Zap,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
  files: File[];
  contactPreference: string;
}

const projectTypes = [
  {
    id: "website",
    name: "Website Development",
    icon: Globe,
    basePrice: 4499000,
  },
  { id: "mobile", name: "Mobile App", icon: Smartphone, basePrice: 5899000 },
  { id: "erp", name: "ERP System", icon: Database, basePrice: 14499000 },
  { id: "custom", name: "Custom Solution", icon: Zap, basePrice: -1 },
];

const services = [
  { id: "ui-design", name: "UI/UX Design", price: 0 },
  { id: "frontend", name: "Frontend Development", price: 0 },
  { id: "backend", name: "Backend Development", price: 0 },
  { id: "database", name: "Database Design", price: 0 },
  { id: "api", name: "API Integration", price: 2200000 },
  { id: "testing", name: "Quality Assurance", price: 0 },
  { id: "deployment", name: "Deployment & Hosting", price: 700000 },
  { id: "maintenance", name: "Maintenance & Support", price: 500000 },
];

const ContactFormSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    services: [],
    budget: "",
    timeline: "",
    message: "",
    files: [],
    contactPreference: "email",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  useEffect(() => {
    let price = 0;
    const selectedProjectType = projectTypes.find(
      (p) => p.id === formData.projectType,
    );
    if (selectedProjectType) {
      price += selectedProjectType.basePrice;
    }

    formData.services.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) price += service.price;
    });

    setEstimatedPrice(price);
  }, [formData.projectType, formData.services]);

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case "email":
        if (value && !/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "phone":
        if (value && !/^\+?[\d\s-()]+/.test(value)) {
          newErrors.phone = "Please enter a valid phone number";
        } else {
          delete newErrors.phone;
        }
        break;
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
        } else {
          delete newErrors.name;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = Array.from(e.target.files ?? []);
  //   setFormData((prev) => ({ ...prev, files: [...prev.files, ...files] }));
  // };

  // const removeFile = (index: number) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     files: prev.files.filter((_, i) => i !== index),
  //   }));
  // };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    // Auto-check free services
    const freeServiceIds = services
      .filter((s) => s.price === 0)
      .map((s) => s.id);
    setFormData((prev) => ({
      ...prev,
      services: Array.from(new Set([...prev.services, ...freeServiceIds])),
    }));
    // Only run once on mount
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // send all to whatsapp with text
    // Helper to format budget range
    const budgetMap: Record<string, string> = {
      "under-2k": "Rp 0 - Rp 2.000.000",
      "2k-5k": "Rp 2.000.000 - Rp 5.000.000",
      "5k-10k": "Rp 5.000.000 - Rp 10.000.000",
      "10k-50k": "Rp 10.000.000 - Rp 50.000.000",
      "over-50k": "Rp 50.000.000+",
    };
    const formattedBudget = budgetMap[formData.budget] ?? "-";

    const whatsappMessage =
      `Permintaan penawaran baru dari ${formData.name} (${formData.email}, ${formData.phone}):\n\n` +
      `Jenis Proyek: ${formData.projectType}\n` +
      `Layanan: ${formData.services.join(", ")}\n` +
      `Anggaran: ${formattedBudget}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Deskripsi Proyek: ${formData.message}\n` +
      `Estimasi Harga: Rp ${estimatedPrice.toLocaleString()}\n` +
      `Preferensi Kontak: ${formData.contactPreference}\n\n` +
      "Penutup: Terima kasih telah menghubungi kami!";

    sendWhatsappMessage(PHONE_NUMBER, whatsappMessage);

    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("Quote request sent successfully!");
  };

  if (isSubmitted) {
    return (
      <section className="bg-muted/30 py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-md"
          >
            <Card className="glass border-0 text-center">
              <CardContent className="p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="from-primary to-accent mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br"
                >
                  <CheckCircle className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="mb-4 text-2xl font-bold">Quote Request Sent!</h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for your detailed information. We&apos;re preparing
                  a custom proposal for your project.
                </p>
                <div className="bg-muted/50 mb-6 rounded-lg p-4">
                  <p className="text-sm font-medium">Estimated Project Value</p>
                  <p className="text-primary text-2xl font-bold">
                    Rp {estimatedPrice.toLocaleString()}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    *Final quote may vary based on detailed requirements
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      phone: "",
                      projectType: "",
                      services: [],
                      budget: "",
                      timeline: "",
                      message: "",
                      files: [],
                      contactPreference: "email",
                    });
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Start New Quote Request
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="via-background from-accent/10 bg-gradient-to-r to-orange-500/10 py-24 pt-12"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h2 className="text-navy-900 mb-3 text-3xl font-bold">
            Request a Quote
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below to get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass border-0 !bg-white">
            <CardHeader>
              <div className="mb-4 flex items-center justify-between">
                <CardTitle className="text-2xl">
                  Get Your Project Quote
                </CardTitle>
                <Badge variant="secondary">
                  Step {currentStep} of {totalSteps}
                </Badge>
              </div>
              <Progress value={progress} className="mb-4" />
              {estimatedPrice > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="from-primary/10 to-accent/10 border-primary/20 rounded-lg border bg-gradient-to-r p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Calculator className="text-primary h-4 w-4" />
                    <span className="text-sm font-medium">Live Estimate</span>
                  </div>
                  <p className="text-primary text-2xl font-bold">
                    Rp {estimatedPrice.toLocaleString()}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    *Estimate updates as you make selections
                  </p>
                </motion.div>
              )}
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            placeholder="Your full name"
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && (
                            <p className="text-xs text-red-500">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            placeholder="your@email.com"
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-xs text-red-500">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                            placeholder="Your company"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="+62 812-3456-7890"
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-xs text-red-500">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <Label className="mb-4 block text-base font-medium">
                          What type of project do you need?
                        </Label>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {projectTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                              <motion.div
                                key={type.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`Rp { formData.projectType === type.id ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50" } cursor-pointer rounded-lg border-2 p-4 transition-all`}
                                onClick={() =>
                                  handleInputChange("projectType", type.id)
                                }
                              >
                                <div className="flex items-center gap-3">
                                  <Icon className="text-primary h-6 w-6" />
                                  <div>
                                    <p className="font-medium">{type.name}</p>
                                    {type.basePrice > 0 ? (
                                      <p className="text-muted-foreground text-sm">
                                        Starting from Rp
                                        {type.basePrice.toLocaleString()}
                                      </p>
                                    ) : (
                                      <p className="text-muted-foreground text-sm">
                                        Custom pricing available
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <Label className="mb-4 block text-base font-medium">
                          Which services do you need?
                        </Label>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          {services.map((service) => (
                            <div
                              key={service.id}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={service.id}
                                checked={formData.services.includes(service.id)}
                                onCheckedChange={() =>
                                  handleServiceToggle(service.id)
                                }
                              />
                              <Label
                                htmlFor={service.id}
                                className="flex-1 cursor-pointer"
                              >
                                <span className="font-medium">
                                  {service.name}
                                </span>
                                {service.price > 0 ? (
                                  <span className="text-muted-foreground ml-2 text-sm">
                                    +Rp {service.price.toLocaleString()}
                                  </span>
                                ) : (
                                  <span className="ml-2 text-sm text-green-500">
                                    Free
                                  </span>
                                )}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label>Budget Range</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              handleInputChange("budget", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-2k">
                                Under Rp 2.000.000
                              </SelectItem>
                              <SelectItem value="2k-5k">
                                Rp 2.000.000 - Rp 5.000.000
                              </SelectItem>
                              <SelectItem value="5k-10k">
                                Rp 5.000.000 - Rp 10.000.000
                              </SelectItem>
                              <SelectItem value="10k-50k">
                                Rp 10.000.000 - Rp 50.000.000
                              </SelectItem>
                              <SelectItem value="over-50k">
                                Over Rp 50.000.000
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Timeline</Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) =>
                              handleInputChange("timeline", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Project timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">
                                ASAP (Rush job +20%)
                              </SelectItem>
                              <SelectItem value="1-3-months">
                                1-3 months
                              </SelectItem>
                              <SelectItem value="3-6-months">
                                3-6 months
                              </SelectItem>
                              <SelectItem value="6-12-months">
                                6-12 months
                              </SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="message">Project Description *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          placeholder="Tell us about your project goals, target audience, key features, and any specific requirements..."
                          rows={6}
                        />
                        <p className="text-muted-foreground text-xs">
                          {formData.message.length}/500 characters
                        </p>
                      </div>

                      {/* <div className="space-y-2">
                        <Label>Upload Project Files (Optional)</Label>
                        <div className="border-muted rounded-lg border-2 border-dashed p-6 text-center">
                          <Upload className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
                          <p className="text-muted-foreground mb-2 text-sm">
                            Upload wireframes, designs, or project briefs
                          </p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.sketch,.fig"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <label
                              htmlFor="file-upload"
                              className="cursor-pointer"
                            >
                              Choose Files
                            </label>
                          </Button>
                        </div>
                        {formData.files.length > 0 && (
                          <div className="space-y-2">
                            {formData.files.map((file, index) => (
                              <div
                                key={index}
                                className="bg-muted/50 flex items-center justify-between rounded p-2"
                              >
                                <span className="text-sm">{file.name}</span>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile(index)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div> */}

                      <div className="space-y-2">
                        <Label>Preferred Contact Method</Label>
                        <Select
                          value={formData.contactPreference}
                          onValueChange={(value) =>
                            handleInputChange("contactPreference", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="meeting">
                              In-Person Meeting
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={currentStep === 1 ? "invisible" : ""}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (currentStep === 1 &&
                          (!formData.name || !formData.email)) ||
                        (currentStep === 2 && !formData.projectType)
                      }
                      className="glow-primary"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isLoading || !formData.message}
                      className="glow-primary group"
                    >
                      {isLoading ? (
                        "Sending Quote Request..."
                      ) : (
                        <>
                          Get My Quote
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
export default ContactFormSection;
