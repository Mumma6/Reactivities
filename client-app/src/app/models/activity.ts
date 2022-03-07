export interface Activity {
  id: string;
  title: string;
  date: string; // Date kommer användas senare
  description: string;
  category: string;
  city: string;
  venue: string;
}

export enum ActivityPropNames {
  id = 'id',
  title = 'title',
  date = 'date',
  description = 'description',
  category = 'category',
  city = 'city',
  venue = 'venue'
}