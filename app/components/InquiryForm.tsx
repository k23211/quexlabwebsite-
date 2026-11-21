"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "../theme";

const FIELD =
  "w-full rounded-2xl border border-line bg-paper px-4 py-3.5 text-[15px] font-normal text-ink transition-colors focus:border-leaf";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject type: ${data.get("project")}\nTimeline: ${data.get("timeline")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:agriquex@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input required name="name" type="text" className={FIELD} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input required name="email" type="email" className={FIELD} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Project type
          <select name="project" defaultValue="Website or app" className={FIELD}>
            <option>Website or app</option>
            <option>Product design</option>
            <option>Agriculture technology</option>
            <option>Partnership</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Timeline
          <select name="timeline" defaultValue="Exploring" className={FIELD}>
            <option>Exploring</option>
            <option>Within 1 month</option>
            <option>1 to 3 months</option>
            <option>More than 3 months</option>
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium">
        Tell us about it
        <textarea
          required
          name="message"
          rows={5}
          className={`${FIELD} resize-y`}
        />
      </label>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-dark">
          Send inquiry
          <span className="btn-icon">
            <ArrowIcon direction="up-right" />
          </span>
        </button>
        {sent && (
          <p className="text-sm text-forest">Your email app should open now.</p>
        )}
      </div>
      <p className="mt-4 text-xs text-ink-soft">
        This opens your email app with the details filled in.
      </p>
    </form>
  );
}
