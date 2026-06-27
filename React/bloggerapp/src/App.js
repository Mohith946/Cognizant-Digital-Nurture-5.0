import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = false;
  const showCourses = true;

  return (

    <div style={{ padding: "20px" }}>

      <h1>Blogger App</h1>

      {/* Method 1 : if using && */}

      {showBooks && <BookDetails />}

      {/* Method 2 : Ternary Operator */}

      {showBlogs ? <BlogDetails /> : <h3>Blogs are hidden</h3>}

      {/* Method 3 : Element Variable */}

      {
        (() => {

          let component;

          if (showCourses)
            component = <CourseDetails />;
          else
            component = <h3>Courses are hidden</h3>;

          return component;

        })()
      }

    </div>

  );

}

export default App;