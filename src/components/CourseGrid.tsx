import CourseCard from "@/components/CourseCard";

const courses = [
  { title: "Learn Figma from Basic", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80" },
  { title: "Build Digital Asset", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80" },
  { title: "the Power of Big Data", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" },
  { title: "Balancing Productivity and Life", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80" },
  { title: "Mastering Money Management", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80" },
  { title: "From Idea to Startup Success", creator: "purepixel studio", price: "$25", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80" },
];

export default function CourseGrid() {
  return (
    <section aria-labelledby="course-list-title" className="bg-white px-5 pb-16 pt-2 font-sans">
      <div className="mx-auto max-w-255">
        <h2 className="sr-only" id="course-list-title">Featured courses</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => <CourseCard key={course.title} {...course} />)}
        </div>
      </div>
    </section>
  );
}
