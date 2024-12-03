import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard({
  cookbooks, cookbook, setCookbook, addNewCookbook,
  deleteCookbook, updateCookbook
}: {
  cookbooks: any[]; cookbook: any; setCookbook: (cookbook: any) => void;
  addNewCookbook: () => void; deleteCookbook: (cookbook: any) => void;
  updateCookbook: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Cookbook
        <button className="btn btn-primary float-end"
          id="wd-add-new-cookbook-click"
          onClick={addNewCookbook} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCookbook} id="wd-update-cookbook-click">
          Update
        </button>
      </h5><br />
      <input value={cookbook.name} className="form-control mb-2"
        onChange={(e) => setCookbook({ ...cookbook, name: e.target.value })} />
      <textarea value={cookbook.description} className="form-control"
        onChange={(e) => setCookbook({ ...cookbook, description: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Cookbooks ({cookbooks.length})</h2> <hr />
      <div id="wd-dashboard-cookbooks" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {cookbooks
            .map((cookbook) => (
              <div key={cookbook._id} className="wd-dashboard-cookbook col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/SnackStack/Cookbooks/${cookbook._id}/Home`}
                    className="wd-dashboard-cookbook-link text-decoration-none text-dark">
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-cookbook-title card-title">
                        {cookbook.name}
                      </h5>
                      <p className="wd-dashboard-cookbook-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {cookbook.description}
                      </p>

                      <button className="btn btn-primary"> Go </button>

                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCookbook(cookbook._id);
                      }}
                        className="btn btn-danger float-end"
                        id="wd-delete-cookbook-click">
                        Delete
                      </button>

                      <button id="wd-edit-cookbook-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCookbook(cookbook);
                        }}
                        className="btn btn-warning me-2 float-end">
                        Edit
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}