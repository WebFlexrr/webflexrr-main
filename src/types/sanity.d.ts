interface getAllServices {
	_id: string;
	name: string;
	slug: string;
	description: string;
	image: string;
	_updatedAt: Date;
}

interface ServiceProcedure {
	_key: string;
	title: string;
	image: string;
	description: string;
	step: number;
}

interface ServiceServices {
	_key: string;
	_type: string;
	description: string;
	title: string;
	image: string;
}

interface ServiceWeAreUsing {
	_key: string;
	iconName: string;
	iconImage: string;
}

interface findServiceByName {
	_id: string;
	name: string;
	description: string;
	slug: string;
	_type: string;
	image: string;
	procedure: ServiceProcedure[];
	services: ServiceServices[];
	weAreUsing: ServiceWeAreUsing[];
	_updatedAt: Date;
}

interface getAllProjects {
	title: string;
	link: string;
	description: string;
	thumbnail: string;
	_updatedAt: string;
}

interface getAllPosts {
	_id: string;
	socialMedia: string;
	socialId: string;
	link: string;
	image: string;
}

interface getAllManagementData {
	_id: string;
	name: string;
	profileImage: string;
	about: string;
	position: string;
	linkedIn: string | null;
	twitter: string | null;
	youtube: string | null;
	instagram: string | null;
}
interface getAllFeedback {
	_id: string;
	clientName: string;
	slug: string;
	clientPosition: string;
	rating: number;
	message: string;
	image: string;
	_type: string;
}

interface getBlog {
	_id: string;
	title: string;
	slug: string;
	description: string;
	thumbnail: string;
	category: string;
	content: TypedObject | TypedObject[];
	_createdAt: string;
	_updatedAt: string;
}

interface getAllFaq {
	id: string;
	question: string;
	ans: string;
	content: TypedObject | TypedObject[];
	_updatedAt: string;
}
interface getAllProcess {
	step: number;
	name: string;
	description: string;
	picture: string;
	_updatedAt: string;
}

interface service {
	serviceName: string;
	isSelected: boolean;
}
interface getAllPlans {
	id: number;
	name: string;
	description: string;
	highlighted: boolean;
	price: number;
	service: service[];
	bookingLink: string;
}

interface getPolicy {
	title: string;
	slug: string;
	content: TypedObject | TypedObject[];
	_updatedAt: string;
}
