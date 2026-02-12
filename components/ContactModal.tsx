"use client";

import confetti from "canvas-confetti";
import { Mail, MessageSquare, User } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

import { useContactModal } from "@/components/providers/ContactModalProvider";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

function runConfettiBurst() {
  const end = Date.now() + 5_000;

  const frame = () => {
    const timeLeft = end - Date.now();

    if (timeLeft <= 0) {
      return;
    }

    const particleCount = (timeLeft / 5_000) * 50;

    confetti({
      particleCount,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      origin: { x: Math.random() * 0.2 + 0.1, y: Math.random() - 0.2 },
    });

    confetti({
      particleCount,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      origin: { x: Math.random() * 0.2 + 0.7, y: Math.random() - 0.2 },
    });

    window.requestAnimationFrame(frame);
  };

  frame();
}

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [form, setForm] = React.useState<ContactFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        toast.error(data.message);
        return;
      }

      closeModal();
      toast.success(data.message);
      runConfettiBurst();
      setForm(initialForm);
    } catch (error) {
      console.error("Something went wrong", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? undefined : closeModal())}>
      <DialogContent className="max-w-md rounded-2xl p-6 shadow-2xl transition-all duration-300 ease-in-out">
        <DialogHeader>
          <DialogTitle className="text-left text-3xl font-bold">Contact Me</DialogTitle>
          <DialogDescription className="pl-1 text-sm text-muted-foreground">
            I typically respond quickly, so feel free to reach out anytime!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div className="relative">
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full py-2 pl-10 pr-4 text-sm"
              placeholder="Name"
              required
            />
            <User className="absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" />
          </div>

          <div className="relative">
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full py-2 pl-10 pr-4 text-sm"
              placeholder="Email"
              required
            />
            <Mail className="absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-muted-foreground" />
          </div>

          <div className="relative">
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full py-2 pl-10 pr-4 text-sm"
              placeholder="Type your message"
              rows={4}
              required
            />
            <MessageSquare className="absolute left-3 top-3 size-[18px] text-muted-foreground" />
          </div>

          <div className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Close
              </Button>
            </DialogClose>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
