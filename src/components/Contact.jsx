import React, { useState } from "react";
import FadeIn from "./FadeIn";
import { sendEmail } from "../utils/emailjs";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await sendEmail(form);
    console.log("response of gmail:", response)

    if (response.success) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <form onSubmit={submit} className="bg-card p-6 border border-[#2b2b2b] rounded-xl max-w-lg">
          <label>Name</label>
          <input
            className="w-full bg-[#0b0b0b] mt-1 mb-4 p-2 border border-[#222] rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <label>Email</label>
          <input
            className="w-full bg-[#0b0b0b] mt-1 mb-4 p-2 border border-[#222] rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <label>Message</label>
          <textarea
            className="w-full bg-[#0b0b0b] mt-1 mb-4 p-2 border border-[#222] rounded"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>

          <button className="px-4 py-2 bg-accent text-black rounded font-semibold">
            Send Message
          </button>

          {status && (
            <p className="mt-3 text-textSecondary">{status}</p>
          )}
        </form>
      </FadeIn>
    </section>
  );
}
