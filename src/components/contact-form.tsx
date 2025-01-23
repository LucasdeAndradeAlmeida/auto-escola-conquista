"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState<string>("");

  // Validação de telefone (apenas para exemplo simples, considerando que o número de telefone tenha 11 dígitos)
  const validatePhone = (phone: string) => {
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/; // Padrão para telefone como "(11) 99999-9999"
    return phonePattern.test(phone);
  };

  // Validação de e-mail simples
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  // Função para formatar o telefone conforme o usuário digita
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formattedPhone = event.target.value.replace(/\D/g, ""); // Remove qualquer caractere não numérico
    if (formattedPhone.length <= 2) {
      formattedPhone = `(${formattedPhone}`;
    } else if (formattedPhone.length <= 6) {
      formattedPhone = `(${formattedPhone.slice(0, 2)}) ${formattedPhone.slice(
        2
      )}`;
    } else {
      formattedPhone = `(${formattedPhone.slice(0, 2)}) ${formattedPhone.slice(
        2,
        7
      )}-${formattedPhone.slice(7, 11)}`;
    }
    setPhone(formattedPhone); // Atualiza o estado do telefone com a formatação
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Get form data
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validação dos campos
    if (!name || !phone || !email || !message) {
      setError("Por favor, preencha todos os campos.");
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(phone)) {
      setError("Telefone inválido. Use o formato: (11) 99999-9999");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Email inválido. Verifique o formato.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Format WhatsApp message
      const whatsappMessage = `*Nova mensagem do site:*\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Email:* ${email}\n*Mensagem:* ${message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/5599999999?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setError("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border bg-card p-8 text-card-foreground">
        <h3 className="text-2xl font-bold text-center text-primary">
          Mensagem Enviada!
        </h3>
        <p className="mt-2 text-center text-gray-500">
          Obrigado pelo seu contato. Em breve nossa equipe entrará em contato.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border bg-card p-8 text-card-foreground"
    >
      {error && (
        <div className="mb-4 text-red-500 text-center">
          <p>{error}</p>
        </div>
      )}
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome completo"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            value={phone}
            placeholder="(11) 99999-9999"
            required
            type="tel"
            onChange={handlePhoneChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="seu@email.com"
            required
            type="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Como podemos ajudar?"
            className="min-h-[100px]"
            required
          />
        </div>
        <Button disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </div>
    </form>
  );
}
