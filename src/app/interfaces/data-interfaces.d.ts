export interface DataModel {
  project: Project;
  activity: Activity;
  user: User;
}

export interface Activity {
  AccountName: string;
  ActivityDate: string;
  ActivityID: number;
  CategoryName: string;
  Comments: string;
  EmployeeID: number;
  ProjectColor: string;
  ProjectID: number;
  ProjectName: string;
  StepID: number;
  Task?: string;
  TypeID: number;
  value: number;
  activeInProject: boolean;
}
export interface Project {
  AccountName: string;
  ProjectAccountID: number;
  ProjectId: number;
  ProjectName: string;
  ProjectCategories: ProjectCategory[];
  ProjectColor: string;
  ProjectStartDate: string;
  ProjectEndDate: string;
  ProjectIsActive: boolean;
}
export interface ProjectCategory {
  CategoryName: string;
  CategoryID: number;
}
export interface User {
  Address?: string;
  AvilableTravel?: boolean;
  BloodType?: string;
  ContactPhonNumber?: string;
  CountryCod?: string;
  CountryName?: string;
  DatePassportExpiration?: string;
  DateVisaExpiration?: null;
  EmergencyNamePerson?: string;
  EmergencyPhoneNumber?: string;
  EmployeeDetailID: number;
  EmployeeID: number;
  EmployeeName: string;
  EmployeeTypeName: string;
  GNPPolicyNumber?: string;
  GenderID: number;
  GenderName: string;
  HasPassaport?: boolean;
  HasVisa?: boolean;
  IsMarried?: boolean;
  LastName: string;
  LocationName: string;
  NumberChildre?: number;
  OfficeLocationID: number;
  PassportExpirationDate?: string;
  PassportNumber?: string;
  ReasonNoTravel?: string;
  RoutePhoto: string;
  SisNovaPolicyNumber?: string;
  SkypeForBusinessUser?: string;
  SkypeUser?: string;
  StartDate?: number;
  StartDateString?: string;
  VisaExpirationDate?: string;
  VisaNumber?: string;
  VisaType?: string;
}
