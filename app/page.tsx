import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Course } from '../components/DynamicIcon';
import MainLayoutWrapper from '../components/MainLayoutWrapper';

async function getCourses(): Promise<Course[]> {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    }
  );

  const { data, error } = await supabase.from('courses').select('*');
  if (error) {
    console.error('Database Operation Error Context:', error.message);
    return [];
  }
  return data as Course[];
}

export default async function Page() {
  const courses = await getCourses();

  return <MainLayoutWrapper courses={courses} />;
}