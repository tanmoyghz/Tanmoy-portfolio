import { Project, Publication, SkillGroup, Education, Experience, TestScores, PersonalDetails } from './types';

export const personalInfo = {
  name: "Tanmoy Goswami",
  subtitle: "Civil & Environmental Engineering Graduate | Flood Risk Management & Sustainable Development Researcher",
  image: "/profile.jpg",
  bio: "", // Removed as requested
  email: "tanmoygghz@gmail.com",
  linkedin: "https://linkedin.com/in/tanmoy-goswami",
  orcid: "https://orcid.org/0009-0005-3794-3760",
  researchgate: "https://www.researchgate.net/profile/Tanmoy-Goswami-5",
  cvLink: "#" 
};

export const aboutText = `Civil and Environmental Engineering graduate with a strong interest in sustainable development and data-driven approaches to climate and environmental challenges. My academic work focuses on understanding and modeling complex environmental systems using statistical, probabilistic, and machine-learning-based methods, with particular emphasis on flood risk assessment and hydrological extremes.

I have hands-on research experience in compound flood analysis, analyzing interacting flood drivers such as rainfall, river discharge, urban runoff, antecedent soil moisture, and evaporation. My work applies copula-based multivariate modeling, Bayesian Belief Networks, Bayesian neural networks, and uncertainty-aware frameworks to capture dependencies among hydrological variables and support risk-informed decision-making. I am especially interested in how these methods can improve integrated flood risk management under climate variability and rapid urbanization, and in understanding how human activities and land-use decisions interact with natural processes to amplify flood and environmental risks.

Alongside hydrology and climate risk, I have conducted research in environmental pollution modeling and construction materials engineering, including studies on vehicular SO₂ emissions using artificial neural networks and fuzzy logic, and a thesis on self-compacting concrete (SCC) that examines the effects of aggregate size and shape using multi-objective optimization (NSGA-II).

Beyond technical research, I am motivated by questions of long-term sustainability, human–environment interactions, and the broader meaning of responsible development.`;

export const personalDetails: PersonalDetails = {
  passport: "A15511654",
  dob: "27/02/2001",
  birthPlace: "Kulaura, Bangladesh",
  nationality: "Bangladeshi",
  gender: "Male",
  phone: "(+880) 1789737858 (Mobile)",
  address: "Uttar Hingajia, Kulaura, Moulvibazar, Sylhet, 3230, Kulaura, Bangladesh (Home)"
};

export const education: Education[] = [
  {
    degree: "B.Sc. Engineering in Civil & Environmental Engineering",
    institution: "Shahjalal University of Science and Technology (SUST)",
    period: "Jan 2020 – Oct 2025",
    cgpa: "3.28 / 4.00",
    thesis: "Effect of Aggregate Size and Shape on the Mechanical Properties of Self-Compacting Concrete",
    supervisor: "Prof. Dr. Mushtaq Ahmed"
  }
];

export const researchInterests = [
  "Compound Flooding",
  "Urban Flood Risk Analysis",
  "Machine Learning & Uncertainty Analysis",
  "Bayesian Modeling",
  "Sustainable Concrete Materials",
  "Multi-objective Optimization",
  "Environmental Protection & Sustainability"
];

export const researchProjects: Project[] = [
  {
    title: "Understanding Compound Flooding Dynamics: A Study of the Surma River in Sylhet",
    period: "November 2024 – Present",
    focus: "Investigates the interplay of multiple flood drivers (rainfall, urban runoff, antecedent soil moisture, and evaporation) in contributing to compound flooding events. Applies Copula-based modeling to simulate joint dependencies and employs a Bayesian Belief Network (BBN) using GeNIe for probabilistic analysis, sensitivity assessment, and scenario evaluation.",
    application: "Aids in understanding complex flood generation processes in urban river basins. Supports data-driven flood forecasting, emergency preparedness, and climate-resilient urban planning for Sylhet and similar flood-vulnerable regions.",
    tools: "Bayesian Network, GeNIe, Machine Learning, Probabilistic Modelling.",
    supervisor: "Prof. Dr. Ahmad Hasan Nury"
  },
  {
    title: "Effect of Aggregate Size and Shape on the Mechanical Properties of Self-Compacting Concrete (SCC)",
    period: "March 2024 – June 2025",
    focus: "Investigates the influence of coarse aggregate size (8mm–20mm) and shape (angular vs. rounded) on the compressive strength, tensile strength, and flexural behavior of SCC. Employs laboratory experiments and finite element modeling (FEM) using ABAQUS to analyze stress distribution and failure modes.",
    application: "Provides insights into optimizing aggregate characteristics to improve SCC performance in structural applications. Supports data-driven mix design decisions for high-performance concrete with enhanced workability and durability, especially in complex formworks and congested reinforcement zones.",
    tools: "OpenLCA, Ecoinvent v3.10 (Background database), Cost analysis, Environmental Modelling.",
    supervisor: "Prof. Dr. Mushtaq Ahmed"
  }
];

export const publications: Publication[] = [
  {
    title: "Predicting Vehicular SO₂ Emissions using Artificial Neural Networks and Mamdani Fuzzy Logic: A Comparative Analysis",
    authors: "Pritom, N. D., and Goswami, T.",
    venue: "International Journal of Computer Applications (PhD Focus), Volume 186, no. 37 (2024)",
    status: "Published",
    link: "https://doi.org/10.5120/ijca2024923945",
    description: "Urban SO₂ from vehicles exceeds the 1-hour EPA standard in the study areas, so the authors test two data-driven predictors: a backprop-tuned MLP neural network and a Mamdani fuzzy logic system using six vehicle-type inputs. The ANN fits better, showing strong agreement with observations (R≈0.93, RMSE≈0.027) and lower error than fuzzy logic (RMSE≈0.049), making it the more informative tool for estimating vehicular SO₂. The work suggests adding meteorological variables next to build an optimal, more generalizable model for urban air-quality management."
  },
  {
    title: "Effect Of Size And Shape Of Coarse Aggregate On Self-Compacting Concrete",
    authors: "Tanmoy Goswami, Md. Sojibur Rahman Sojib, Dr. Mushtaq Ahmed, Mohaiminul Haque",
    venue: "Submitted to Proceedings of the 8th ICCESD 2026, KUET, Khulna, Bangladesh",
    status: "Under Review",
    description: "This study examines how coarse aggregate size (8–20 mm) and shape (angular vs. rounded) influence the fresh and hardened properties of Self-Compacting Concrete under a constant mix design. Results show that smaller, rounded aggregates enhance flowability and passing ability, while larger, angular aggregates improve strength at the expense of workability. The findings offer practical guidance for optimizing SCC mix design to balance structural performance and constructability."
  },
  {
    title: "Flood Level Prediction Using Artificial Neural Network and Random Forest with Multivariate Hydrometeorological Inputs: A Case Study of Sylhet, Bangladesh",
    authors: "Tanmoy Goswami, Nixon Deb Pritom, Dr. Ahmed Hasan Nury, Md. Imam Hossain",
    venue: "Submitted to Proceedings of the 8th ICCESD 2026, KUET, Khulna, Bangladesh",
    status: "Under Review",
    description: "Sylhet faces frequent, compound flooding from heavy rain, high upstream flow, and saturated soils—seen acutely in the 2022 Surma basin disaster—demanding predictive, data-driven management. This study builds daily water-level forecasts using two models—an ANN with two ReLU hidden layers and a Random Forest ensemble—trained on 1961–2024 data for four drivers: precipitation, soil moisture, evaporation, and upstream discharge. Both models perform strongly, with Random Forest slightly outperforming ANN and identifying precipitation and upstream discharge as dominant drivers. The results support early warning systems, flood-risk reduction, and climate adaptation planning for Sylhet."
  },
  {
    title: "Forecasting the Severity of Traffic Accidents in Highway Using Random Forest, Bayesian Network and XGBoost",
    authors: "Nixon Deb Pritom and Tanmoy Goswami",
    venue: "KFUPM Journal of Undergraduate Research International",
    status: "Under Review",
    description: "Based on accident records from 274 Norwegian highway tunnels (2010–2020), this study evaluates Random Forest, Bayesian Network, and XGBoost models to predict accident severity. Random Forest outperforms the other models, achieving 86% accuracy and a ROC-AUC of 0.89. The results highlight key risk factors and support proactive tunnel management, congestion mitigation, and safety-oriented operational strategies."
  },
  {
    title: "Predicting Highway Accident Blackspot using GIS and Predictive Modelling",
    authors: "Nixon Deb Pritom, Kuman Borshopriyo, and Tanmoy Goswami",
    venue: "Transportation Safety Research, Lund University Journal",
    status: "Under Review",
    description: "Rapid urbanization has increased traffic volume and crash frequency along the Dhaka–Sylhet (N2) corridor. Using 16 years of accident data (2000–2015), this study identifies 50 accident black spots, including 10 high-risk locations, and develops predictive models to understand crash causation. The findings provide actionable insights for targeted enforcement, engineering interventions, and data-driven road safety planning in low- and middle-income countries."
  }
];

export const skills: SkillGroup[] = [
  {
    category: "Software",
    items: ["MATLAB", "ArcGIS", "Google Earth Engine", "SWMM", "HEC-RAS", "Abaqus", "Ansys", "InfraWorks", "AutoCAD", "SPSS", "ETABS", "GRASP", "GeNIe Modeler", "Uninet"]
  },
  {
    category: "Computational Modelling",
    items: ["Artificial Neural Network (ANN)", "Bayesian Inference", "Bayesian Neural Network (BNN)", "Convolutional Neural Network (CNN)", "Fuzzy Logic"]
  },
  {
    category: "Programming",
    items: ["Python", "MATLAB"]
  },
  {
    category: "Machine Learning Models",
    items: ["Random Forest", "XGBoost", "Support Vector Machine", "Artificial Neural Network"]
  },
  {
    category: "Database",
    items: ["Google Earth Engine", "(BMD)", "BWDB", "USGS Earth Explorer", "HydroSHEDS", "Copernicus (DEM)", "NASA SRTM", "ECMWF", "APHRODITE"]
  },
  {
    category: "Libraries & Frameworks",
    items: ["TensorFlow", "PyTorch", "scikit-learn"]
  }
];

export const professionalExperience: Experience[] = [
  {
    role: "Research Assistant",
    organization: "Shahjalal University of Science and Technology Research Center",
    period: "07.2024 – Present"
  }
];

export const extracurricularActivities: Experience[] = [
  {
    role: "Transportation Secretary",
    organization: "Association of Civil and Environmental Engineering, Shahjalal University of Science and Technology",
    period: "02.2022 – 04.2023"
  },
  {
    role: "Piano Teacher",
    organization: "Aaj School, Shahjalal University of Science and Technology",
    period: "01.2025 – 07.2025"
  },
  {
    role: "Football Team Captain",
    organization: "Departmental Team, Department of CEE, SUST",
    period: "03.2022 – 02.2025"
  },
  {
    role: "Lead Singer",
    organization: "Band Kornov, Shahjalal University of Science and Technology",
    period: "08.2024 – 11.2024"
  },
  {
    role: "Mentor",
    organization: "Annual Cultural Program, Department of CEE, SUST",
    period: "09.2023 – 11.2023"
  }
];

export const testScores: TestScores = {
  exam: "IELTS Academic",
  date: "Nov 2025",
  overall: "7.5",
  breakdown: [
    { skill: "Reading", score: "8.5" },
    { skill: "Listening", score: "8.5" },
    { skill: "Speaking", score: "7.0" },
    { skill: "Writing", score: "6.5" }
  ]
};

export const references = [
  "Prof. Dr. Mushtaq Ahmed",
  "Prof. Dr. Ahmad Hasan Nury",
  "Asst. Prof. Mohaiminul Haque"
];