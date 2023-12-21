import projectOneHeader from "../assets/images/binghatti2.webp";

import projectTwoHeader from "../assets/images/elingtton.webp";
import locationIcon from "../assets/icons/location-icon.svg";
import percentage from "../assets/icons/down-payment.svg";
import coinIcon from "../assets/icons/coin.svg";
import DubaiVideo from "../assets/videos/dubai.mp4";
//Nearby Images
import dxb from "../assets/images/nearby/dxb.webp";
import downtown from "../assets/images/nearby/downtown.webp";
import marina from "../assets/images/nearby/marina.webp";
import moe from "../assets/images/nearby/moe.webp";
import dwc from "../assets/images/nearby/dwc.webp";
import jumeirah from "../assets/images/nearby/jumeirah.webp";
import future from "../assets/images/nearby/future.webp";
export const projectsData = [
	{
		id: 1,
		ProjectName: { en: "Jacob & Co", ar: "جاكوب" },
		HeaderTitle: {
			en: "Iconic Skyscraper Designed by Jacob & Co ",
			ar: "ناطحة سحاب مميزة من تصميم جاكوب و شركاءه",
		},
		HeaderTitleTow: {
			en: "Greenary",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderImage: projectOneHeader,
		InfoTitle: {
			en: "Live in the Closest Residential Point to Space",
			ar: "إغتنم فرصة العيش في أعلى و أقرب برج سكني للفضاء",
		},
		InfoSubTitle: {
			en: "Designed by Jacob & Co, this Residences building will become the planet's closest residential point to space. Feel your best, enjoying the unique service, original design, and exclusivity of the project.",
			ar: "سيصبح هذا المبنى السكني مصمم من قبل شركة جاكوب و شركاءه أقرب نقطة سكنية للفضاء على كوكب الأرض. أستمتع بالخدمة الفريدة و التصميم الأصلي و الحصرية لهذا المشروع ",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED8.34M", ar: "AED8.34M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Downtown", ar: "وسط دبي" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "30%", ar: "30%" },
				SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
			},
		],
		Nearby: [
			{
				Duration: "11",
				Place: { en: "Muesem of Future", ar: "متحف المستقبل" },
				Image: future,
			},
			{
				Duration: "27",
				Place: { en: "Dubai Marina", ar: "دبي مارينا" },
				Image: marina,
			},
			{
				Duration: "20",
				Place: { en: "Palm Jumeirah", ar: "نخلة جميرا" },
				Image: jumeirah,
			},
			{
				Duration: "20",
				Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
				Image: dxb,
			},
			{
				Duration: "10",
				Place: { en: "Dubai Downtown", ar: "وسط دبي (برج خليفة)" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "مول الامارات" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
	{
		id: 2,
		ProjectName: { en: "One River Point", ar: "One River Point" },
		HeaderTitle: {
			en: "A high-end urban escape that captures the mood and rhythm of Dubai",
			ar: "مبنى حضاري فاخر يلتقط الإيقاع الفريد لمدينة دبي",
		},
		HeaderImage: projectTwoHeader,
		InfoTitle: {
			en: "Overlooking the mesmerizing Dubai Canal & Burj Khalifa",
			ar: "يطل على قناة دبي الساحرة و برج خليفة",
		},
		InfoSubTitle: {
			en: "The residential project presents an array of world-class amenities that cater to the wellness-oriented and sophisticated lifestyle of its residents. The amenities are celebrated as an exclusive zone combining various spaces through a striking formal expression that adds a touch of architectural distinction and visual appeal.",
			ar: "يقدم المشروع السكني مجموعة من وسائل الراحة على مستوى عالمي تلبي نمط حياة سكانه الموجه نحو العافية والأناقة. تُحتفى بوسائل الراحة كمنطقة حصرية تجمع بين مختلف الفضاءات من خلال تعبير فني بارز يضيف لمسة من التميز المعماري والجاذبية البصرية. ",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED1.78M", ar: "AED1.78M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Business Bay", ar: "الخليج التجاري" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "20%", ar: "20%" },
				SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
			},
		],
		Nearby: [
			{
				Duration: "20",
				Place: { en: "Muesem of Future", ar: "متحف المستقبل" },
				Image: future,
			},
			{
				Duration: "27",
				Place: { en: "Dubai Marina", ar: "دبي مارينا" },
				Image: marina,
			},
			{
				Duration: "28",
				Place: { en: "Palm Jumeirah", ar: "نخلة جميرا" },
				Image: jumeirah,
			},
			{
				Duration: "20",
				Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
				Image: dxb,
			},
			{
				Duration: "18",
				Place: { en: "Dubai Downtown", ar: "وسط دبي (برج خليفة)" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "مول الامارات" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
];
