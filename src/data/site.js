import { load } from "js-yaml";
import rawSiteData from "./site.yaml?raw";

const site = load(rawSiteData);

export const siteMeta = site.siteMeta;
export const contactLinks = site.contactLinks;
export const hero = site.hero;
export const personalIntro = site.personalIntro;
export const focusSection = site.focusSection;
export const focusAreas = site.focusAreas;
export const selectedWork = site.selectedWork;
export const writingNotes = site.writingNotes;
export const links = site.links;
export const timelineSection = site.timelineSection;
export const timeline = site.timeline;
