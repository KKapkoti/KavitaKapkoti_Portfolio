import  { StaticImageData } from 'next/image';

/**
 * @typedef {Object} TechDetails
 * @property {string|import('next/image').StaticImageData} logo
 * @property {string|import('next/image').StaticImageData} [darkModeLogo]
 * @property {string} label
 * @property {string} url
 */

/**
 * @typedef {Object} ExperienceDetails
 * @property {string|import('next/image').StaticImageData} logo
 * @property {string|import('next/image').StaticImageData} [darkModeLogo]
 * @property {string} logoAlt
 * @property {string} position
 * @property {boolean} [currentlyWorkHere]
 * @property {Date} startDate
 * @property {Date} [endDate]
 * @property {string[]} summary
 */

/**
 * @typedef {Object} ProjectDetails
 * @property {string} name
 * @property {string} description
 * @property {string} url
 * @property {string|import('next/image').StaticImageData} previewImage
 * @property {string[]} technologies
 */

/**
 * @typedef {Object} EducationDetails
 * @property {string} course
 * @property {string|import('next/image').StaticImageData} [collegeIcon]
 * @property {string} education
 * @property {string} title
 * @property {Date} startDate
 * @property {Date} [endDate]
 * @property {boolean} [currentlyWorkHere]
 */

//export empty objects to avoid unused file warning
export {};

