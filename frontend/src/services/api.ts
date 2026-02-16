import type {
  Project,
  Skill,
  Experience,
  Education,
  ContactMessage,
  SocialMedia,
  Attribution,
  Profile,
} from "../types";

const BASE_URL = "http://localhost:8000/api";

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${BASE_URL}/projects/`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const getSkills = async (): Promise<Skill[]> => {
  const response = await fetch(`${BASE_URL}/skills/`);
  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }
  return response.json();
};

export const getExperiences = async (): Promise<Experience[]> => {
  const response = await fetch(`${BASE_URL}/experiences/`);
  if (!response.ok) {
    throw new Error("Failed to fetch experiences");
  }
  return response.json();
};

export const getEducations = async (): Promise<Education[]> => {
  const response = await fetch(`${BASE_URL}/educations/`);
  if (!response.ok) {
    throw new Error("Failed to fetch educations");
  }
  return response.json();
};

export const getContactMessages = async (): Promise<ContactMessage[]> => {
  const response = await fetch(`${BASE_URL}/contact/`);
  if (!response.ok) {
    throw new Error("Failed to fetch contact messages");
  }
  return response.json();
};

export const getSocialMedias = async (): Promise<SocialMedia[]> => {
  const response = await fetch(`${BASE_URL}/social-media/`);
  if (!response.ok) {
    throw new Error("Failed to fetch social medias");
  }
  return response.json();
};

export const getAttributions = async (): Promise<Attribution[]> => {
  const response = await fetch(`${BASE_URL}/attribution/`);
  if (!response.ok) {
    throw new Error("Failed to fetch attributions");
  }
  return response.json();
};

export const getProfiles = async (): Promise<Profile[]> => {
  const response = await fetch(`${BASE_URL}/profile/`);
  if (!response.ok) {
    throw new Error("Failed to fetch profiles");
  }
  return response.json();
};
