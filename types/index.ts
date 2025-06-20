import type React from "react"

export interface Skill {
  name: string
  icon: string | React.ReactNode
}

export interface Education {
  degree: string
  institution: string
  year: string
  gpa: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  live: string
  image: string
}

export interface Experience {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

// ADD THIS NEW INTERFACE
export interface PersonalInfo {
  name: string
  title: string
  description: string[]
  email: string
  phone: string
  location: string
  social: {
    github: string
    linkedin: string
    instagram: string
  }
}