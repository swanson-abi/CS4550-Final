import { Routes, Route, Navigate, useParams, useLocation} from "react-router";

import { FaAlignJustify } from "react-icons/fa6";


export default function CookBooks() {
  const { cid } = useParams();

  const { pathname } = useLocation();
  return (
    <div>
<h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
       
      </h2>
      <hr />
      <div className="d-flex"> 
        <div className="course-nav ms-auto">

        </div>
        <div className="course-tabs">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />

            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />

          </Routes>
        </div>
      </div>
    </div>
  );
}