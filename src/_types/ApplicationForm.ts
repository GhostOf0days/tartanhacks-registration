import { CMUCollege, CollegeLevel, Ethnicity, Gender, HackathonExperience, Region, ShirtSize, WorkPermission } from "enums/Profile"

export interface BasicFields {
  displayName: string
  firstName: string
  lastName: string
  gender: Gender
  genderOther?: string
  ethnicity: Ethnicity
  ethnicityOther?: string
}

export interface SchoolFields {
  school: string
  college?: CMUCollege
  level: CollegeLevel
  graduationYear: string
  major: string
}

export interface ExperienceFields {
  coursework?: string
  language?: string
  hackathonExperience: HackathonExperience
}

export interface WorkAuthorizationFields {
  workPermission: WorkPermission
  workLocation?: string
  workStrengths: string
  sponsorRanking: string[]
}

export interface PortfolioFields {
  github: string
  resume: string
  design?: string
  website?: string
}

export interface EssayFields {
  essay: string
}

export interface LogisticsFields {
  dietaryRestrictions?: string
  shirtSize: ShirtSize
  wantsHardware: boolean
  address: string
  region: Region
  phoneNumber: string
}

export type ApplicationForm = BasicFields & SchoolFields & ExperienceFields & WorkAuthorizationFields & PortfolioFields &EssayFields & LogisticsFields