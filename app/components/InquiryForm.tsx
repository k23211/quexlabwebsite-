"use client";

import { FormEvent, useState } from "react";
import { FOREST, INK, INK_SOFT, PAPER } from "../theme";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject type: ${data.get("project")}\nTimeline: ${data.get("timeline")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:hello@quexlabtechnologies.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="border-t pt-8" style={{ borderColor: "#D8D8CC" }}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Name
          <input required name="name" type="text" className="border bg-transparent px-3 py-3 font-normal outline-none transition-colors focus:border-[var(--forest)]" style={{ borderColor: "#C9CCC1", color: INK }} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input required name="email" type="email" className="border bg-transparent px-3 py-3 font-normal outline-none transition-colors focus:border-[var(--forest)]" style={{ borderColor: "#C9CCC1", color: INK }} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Project type
          <select name="project" defaultValue="Website or app" className="border bg-transparent px-3 py-3 font-normal outline-none focus:border-[var(--forest)]" style={{ borderColor: "#C9CCC1", color: INK, background: PAPER }}>
            <option>Website or app</option>
            <option>Product design</option>
            <option>Agriculture technology</option>
            <option>Partnership</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Timeline
          <select name="timeline" defaultValue="Exploring" className="border bg-transparent px-3 py-3 font-normal outline-none focus:border-[var(--forest)]" style={{ borderColor: "#C9CCC1", color: INK, background: PAPER }}>
            <option>Exploring</option>
            <option>Within 1 month</option>
            <option>1 to 3 months</option>
            <option>More than 3 months</option>
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold">
        Tell us about it
        <textarea required name="message" rows={5} className="resize-y border bg-transparent px-3 py-3 font-normal outline-none focus:border-[var(--forest)]" style={{ borderColor: "#C9CCC1", color: INK }} />
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" className="bg-[var(--forest)] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">Send inquiry <span aria-hidden>↗</span></button>
        {sent && <p className="text-sm" style={{ color: FOREST }}>Your email app should open now.</p>}
      </div>
      <p className="mt-3 text-xs" style={{ color: INK_SOFT }}>This opens your email app with the details filled in.</p>
    </form>
  );
}
