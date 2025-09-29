import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need internet?",
      answer: "No. Core functions run 100% offline; cloud only for optional backups and analytics."
    },
    {
      question: "Can it cut steel-wire armoured cables?",
      answer: "Yes – swap to tungsten blade profile; AI adjusts speed to 4 mm/s automatically."
    },
    {
      question: "What happens if the camera lens fogs?",
      answer: "Humidity sensor triggers air-knife + heater; batch paused until clear. The system automatically resumes when conditions are optimal."
    },
    {
      question: "How accurate is the AI vision system?",
      answer: "Our AI achieves 98.7% mAP@0.5 on material detection and ±0.05mm precision on dimensional measurements, trained on 42,000 labeled images."
    },
    {
      question: "What standards does it comply with?",
      answer: "Fully compliant with IS 10810 (all parts) and IS 7098 specifications. Auto-generated reports are legally valid digital records per IT Act 2000."
    },
    {
      question: "How long does calibration take?",
      answer: "Automatic calibration runs in under 3 minutes using NIST-traceable checkerboard + laser distance sensor. Triggers every 24h or on 5°C temperature change."
    },
    {
      question: "Can I integrate with existing LIMS/ERP systems?",
      answer: "Yes, we provide REST APIs, MQTT broker plug-ins, and pre-built connectors for SAP S/4, LabView, and Siemens TIA Portal."
    },
    {
      question: "What's the blade life expectancy?",
      answer: "Predictive LSTM model provides remaining useful life estimation with 2.1h RMSE. Typical blade life: 800-1200 specimens depending on material."
    },
    {
      question: "How is data security handled?",
      answer: "SOC-2 Type II certified with AES-256 encryption at rest, TLS 1.3 in transit, RBAC with LDAP sync, and immutable audit logs for 7 years."
    },
    {
      question: "Can I run this completely offline/air-gapped?",
      answer: "Yes, we provide an 8GB offline bundle with all models and dependencies. Updates via USB once per quarter for air-gapped environments."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-72 h-72 bg-gradient-to-tr from-primary to-purple-400 rounded-full opacity-20 blur-3xl animate-accordion-down"></div>
  </div>

  <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-4 animate-fade-in-up">
    Frequently Asked Questions
  </h2>

  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
    Get answers to common questions about <span className="font-medium text-primary">CablePrep AI</span> system implementation and operation.
  </p>
</div>


        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6  backdrop-blur-sm shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="text-sm text-muted-foreground">
                📧 support@cableprep.ai • 📞 +91-800-123-CABLE • 💬 Live Chat (3 min response)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;