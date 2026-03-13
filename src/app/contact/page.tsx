import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="bg-background border border-border rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="mb-8 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-muted/80 mb-4 border border-border">
                <svg
                  className="h-8 w-8 text-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Send me a message
              </h2>
              <p className="text-muted-foreground">
                I&apos;ll get back to you as soon as possible
              </p>
            </div>
            <ContactForm />
          </div>

          <div className="bg-muted/30 px-8 py-6 text-center border-t border-border">
            <p className="text-sm text-muted-foreground">
              Or reach out directly at{' '}
              <a
                href="mailto:yash2154rai@gmail.com"
                className="font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                yash2154rai@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
