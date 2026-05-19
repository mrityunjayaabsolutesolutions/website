export const site = {
	name: 'Mrityunjaya Absolute Solutions',
	shortName: 'MAS',
	tagline: 'Ideate · Innovate · Implement',
	headline: 'Technology solutions that move your business forward',
	subheadline:
		'End-to-end software development, mobility, and data consulting — delivered with domain expertise and proven methodologies.',
	email: 'contact@mrityunjayaabsolutesolutions.com',
	phone: '+91 63017 32133',
	phoneTel: '+916301732133',
	location: 'India',
	url: 'https://mrityunjayaabsolutesolutions.com',
} as const;

export const nav = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Why Us', href: '#why-us' },
	{ label: 'Contact', href: '#contact' },
] as const;

export const stats = [
	{ value: '10+', label: 'Years of delivery' },
	{ value: '50+', label: 'Projects delivered' },
	{ value: '8', label: 'Service lines' },
	{ value: '24/7', label: 'Support options' },
] as const;

export const about = `Mrityunjaya Absolute Solutions is an information technology solutions company offering progressive end-to-end software development, mobile application, enterprise portal, web application, ecommerce development, technical support, enterprise mobility, testing, data & analytic consulting solutions by combining our business domain experience.

We deliver comprehensive web services ranging from custom website design to development of complex enterprise web applications. We base our offerings on an understanding of clients' business requirements, combining business domain knowledge with technology competence and proven methodologies to deliver high-quality, cost-effective results that maximize competitive advantage and productivity.`;

export const services = [
	{
		title: 'Custom Web & Enterprise Apps',
		description:
			'Scalable web platforms and enterprise applications tailored to your workflows, integrations, and growth plans.',
		icon: 'code',
	},
	{
		title: 'Mobile Applications',
		description:
			'Native and cross-platform mobile experiences with secure APIs, offline-ready flows, and polished UX.',
		icon: 'mobile',
	},
	{
		title: 'E-commerce Development',
		description:
			'Online stores, catalog systems, payments, and fulfillment integrations built for conversion and reliability.',
		icon: 'cart',
	},
	{
		title: 'Enterprise Portals & Mobility',
		description:
			'Employee and partner portals, mobility programs, and unified access to business-critical systems.',
		icon: 'portal',
	},
	{
		title: 'QA & Testing',
		description:
			'Structured test strategy, automation, and quality gates so releases ship with confidence.',
		icon: 'shield',
	},
	{
		title: 'Data & Analytics Consulting',
		description:
			'Data pipelines, dashboards, and analytics programs that turn operational data into decisions.',
		icon: 'chart',
	},
	{
		title: 'Technical Support & Managed Services',
		description:
			'Proactive monitoring, incident response, and ongoing optimization for your production stack.',
		icon: 'support',
	},
	{
		title: 'Infrastructure & BPM',
		description:
			'Infrastructure management and business process optimization aligned with ITIL best practices.',
		icon: 'infra',
	},
] as const;

export const whyUs = [
	{
		title: 'Domain-first delivery',
		description:
			'We start from your business outcomes, then select proven technology — not the other way around.',
	},
	{
		title: 'Cost-effective quality',
		description:
			'Lean delivery models and reusable patterns keep projects on budget without cutting corners.',
	},
	{
		title: 'Security by design',
		description:
			'IP protection, secure SDLC practices, and compliance-aware architecture from day one.',
	},
	{
		title: 'Partnership mindset',
		description:
			'Transparent communication, measurable milestones, and support beyond go-live.',
	},
] as const;

export const process = [
	{ step: '01', title: 'Discover', description: 'Understand goals, users, constraints, and success metrics.' },
	{ step: '02', title: 'Design', description: 'Solution architecture, UX flows, and an actionable delivery roadmap.' },
	{ step: '03', title: 'Build', description: 'Iterative development with testing, reviews, and stakeholder demos.' },
	{ step: '04', title: 'Support', description: 'Launch, monitor, optimize, and scale as your business evolves.' },
] as const;
