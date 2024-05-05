export const BASE_URL = `https://api.weekday.technology/adhoc/getSampleJdJSON`;

export const roleOptions = [
  {
    category: "Engineering",
    options: [
      { label: "Frontend", value: "frontend", id: "eng-frontend-abc1" },
      { label: "Backend", value: "backend", id: "eng-backend-abc2" },
      { label: "Fullstack", value: "fullstack", id: "eng-fullstack-abc3" },
      { label: "Tech Lead", value: "tech lead", id: "eng-tech-lead-abc4" },
      { label: "Android", value: "android", id: "eng-android-abc5" },
      { label: "iOS", value: "ios", id: "eng-ios-abc6" },
      { label: "DevOps", value: "devops", id: "eng-devops-abc7" },
      {
        label: "QA Engineer",
        value: "qa engineer",
        id: "eng-qa-engineer-abc8",
      },
      {
        label: "Data Engineer",
        value: "data engineer",
        id: "eng-data-engineer-abc9",
      },
    ],
  },
  {
    category: "Design",
    options: [
      { label: "Designer", value: "Designer", id: "desg-abc1" },
      {
        label: "BackenDesign Manager",
        value: "BackenDesign Manager",
        id: "desg-abc2",
      },
      {
        label: "Graphics Designer",
        value: "Graphics Designer",
        id: "desg-abc3",
      },
      { label: "Product Designer", value: "Product Designer", id: "desg-abc4" },
    ],
  },
  {
    category: "Product",
    options: [
      { label: "Product Manager", value: "Product Manager", id: "prd-abc1" },
    ],
  },
];
export const numberOfEmployees = [
  { label: "1-10", value: [1, 10], id: "range-abc4" },
  { label: "11-20", value: [11, 20], id: "range-abc3" },
  { label: "101-200", value: [101, 200], id: "range-abc2" },
  { label: "201-500", value: [201, 500], id: "range-abc1" },
  { label: "500+", value: [500], id: "range-abc0" },
];
export const ExperineceOptions = [
  { label: "1", value: 1, id: "exp-abc1" },
  { label: "2", value: 2, id: "exp-abc12" },
  { label: "3", value: 3, id: "exp-abc13" },
  { label: "4", value: 4, id: "exp-abc4" },
  { label: "5", value: 5, id: "exp-abc5" },
  { label: "6", value: 6, id: "exp-abc6" },
  { label: "9", value: 9, id: "exp-abc9" },
  { label: "10", value: 10, id: "exp-abc10" },
];
export const RemoteOptions = [
  { label: "Remote", value: "Remote", id: "rem-abc1" },
  { label: "Hybrid", value: "Hybrid", id: "rem-abc12" },
  { label: "In-Office", value: "In-Office", id: "rem-abc13" },
];

export const TechStackOptions = [
  { label: "Java", value: "Java", id: "tech-abc1" },
  { label: "React", value: "React", id: "tech-abc12" },
  { label: "Python", value: "Python", id: "tech-abc3" },
  { label: "JavaScript", value: "JavaScript", id: "tech-abc4" },
  { label: "Node.js", value: "Node.js", id: "tech-abc5" },
  { label: "Angular", value: "Angular", id: "tech-abc6" },
  { label: "Vue.js", value: "Vue.js", id: "tech-abc7" },
  { label: "Ruby", value: "Ruby", id: "tech-abc8" },
  { label: "C#", value: "C#", id: "tech-abc9" },
  { label: "PHP", value: "PHP", id: "tech-abc10" },
];

export const SalaryRange = [
  { label: "0L", value: 0, id: "sal-abc1" },
  { label: "10L", value: 10, id: "sal-abc2" },
  { label: "20L", value: 20, id: "sal-abc3" },
  { label: "30L", value: 30, id: "sal-abc4" },
  { label: "40L", value: 40, id: "sal-abc5" },
  { label: "50L", value: 50, id: "sal-abc6" },
  { label: "60L", value: 60, id: "sal-abc7" },
  { label: "70L", value: 70, id: "sal-abc8" },
];

export const FILTER_TYPES = {
  roles: "ROLES",
  employeeSize: "EMPLOYEE_SIZE",
  experience: "EXPERIENCE",
  workMode: "WORK_MODE",
  techStack: "TECH_STACK",
  minBasePay: "MIN_BASE_PAY",
};
