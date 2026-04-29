"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border border-rule p-stack-md">
        <div className="label text-terracotta mb-stack-sm">Message Sent</div>
        <p className="font-serif text-2xl text-ink mb-stack-sm">
          Thanks for reaching out.
        </p>
        <p className="text-body-md text-ink-soft mb-stack-md">
          I&apos;ll get back to you as soon as I can — usually within a day or
          two.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="label text-terracotta hover:text-ink transition-colors"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-stack-md">
      <div>
        <label htmlFor="name" className="label text-ink block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="input-line"
        />
      </div>

      <div>
        <label htmlFor="email" className="label text-ink block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="input-line"
        />
      </div>

      <div>
        <label htmlFor="message" className="label text-ink block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project, opportunity, or just say hi…"
          className="input-line resize-none"
        />
      </div>

      {status === "error" && (
        <div className="label text-red-700">
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      <div className="pt-stack-sm">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-filled"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
