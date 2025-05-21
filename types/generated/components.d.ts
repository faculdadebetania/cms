import type { Schema, Struct } from '@strapi/strapi';

export interface FacultyAcademicQualification extends Struct.ComponentSchema {
  collectionName: 'components_faculty_academic_qualifications';
  info: {
    description: '';
    displayName: 'Academic Qualification';
    icon: 'book';
  };
  attributes: {
    Qualification: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faculty.academic-qualification': FacultyAcademicQualification;
    }
  }
}
