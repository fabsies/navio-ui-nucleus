import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const lessons = [
  { title: 'Introduction to React', duration: '45 mins' },
  { title: 'State Management with Zustand', duration: '1 hr' },
  { title: 'Building Forms with React Hook Form', duration: '1.5 hrs' },
  { title: 'Styling with Tailwind CSS', duration: '2 hrs' },
];

export default function Lessons() {
  return (
    <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {lessons.map((lesson) => (
          <Card key={lesson.title}>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>Duration: {lesson.duration}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}