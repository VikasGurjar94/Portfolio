import SectionHeading from "@/components/Helper/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, footerSocialLinks } from "@/data";
import { Send } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950 overflow-hidden">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        
        {/* 1. Animate Section Heading */}
        <div data-aos="fade-down">
          <SectionHeading
            title_1="Get In"
            title_2="Touch"
            description="Have a project idea, internship opportunity, or collaboration in mind? I'd love to connect."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-14">

          {/* CONTACT INFO: Slides in from left */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Let's Talk
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, internship
                opportunities, or collaborating on interesting ideas.
                Feel free to reach out.
              </p>
            </div>

            {/* CONTACT CARDS: Staggered zoom-in for icons */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                return (
                  <a
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in-up"
                    data-aos-delay={300 + (index * 100)}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* SOCIAL LINKS: Pop in from the bottom */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h4 className="text-lg font-medium mb-4">
                Follow Me
              </h4>

              <div className="flex gap-3">
                {footerSocialLinks.map((link, index) => {
                  return (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-aos="zoom-in"
                      data-aos-delay={700 + (index * 100)}
                      className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:shadow-md transition-all duration-300"
                    >
                      <link.icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* CONTACT FORM: Slides in from right */}
          <div data-aos="fade-left" data-aos-delay="400">
            <form className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6 shadow-lg border border-transparent dark:hover:border-blue-500/20 transition-all">

              <div className="grid sm:grid-cols-2 gap-4">

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    required
                    className="bg-gray-100 dark:bg-gray-900 border-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    required
                    className="bg-gray-100 dark:bg-gray-900 border-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  required
                  className="bg-gray-100 dark:bg-gray-900 border-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-gray-100 dark:bg-gray-900 border-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white shadow-lg active:scale-95 transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;