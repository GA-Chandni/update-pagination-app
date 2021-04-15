//NPM package
import React, { useState, useEffect } from "react";

//Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// Import React Table with CSS
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

//material ui
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";

//Router Modules
import { Link } from "react-router-dom";

//local file
import { PostsDetailsAction } from "../redux/action/ActionForPosts";

//css style
import "./style.css";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const FetchPostDetails = (props) => {
  //using Hooks
  const [posts, setposts] = useState(0);
  const [loading] = useState("Loading  Please Wait.....");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  //modal instruction for opening and closing
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  // get Time Interval
  useEffect(() => {
    (async function () {
      try {
        setTimeout(() => {
          dispatch(PostsDetailsAction(posts));
          setposts(posts + 1);
        }, 10000);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [posts, dispatch]); //input values

  //Get Current Post-------
  const fetchdetails = useSelector((state) => {
    return state.posts;
  });
  // console.log("fetch details post--", fetchdetails);

  return (
    <div>
      {/*=================== using React Table  =======================================*/}
      <ReactTable
        data={fetchdetails} //data
        // Global Column Defaults
        columns={[
          {
            columns: [
              {
                Header: () => <h5 className="row-design">TITLE</h5>, // get the title
                accessor: "title", // String-based value accessors!
                filterable: true, // using for filter via search box
                sortable: true,
                //-------------------- - using css ----------------------------
                style: {
                  paddingBottom: "25px",
                  paddingTop: "20px",
                },
              },
              {
                Header: () => <h5 className="row-design">URL</h5>,
                accessor: "url",
                sortable: true,
                style: {
                  paddingBottom: "25px",
                  paddingTop: "20px",
                },
              },
              {
                Header: () => <h5 className="row-design">AUTHOR</h5>,
                accessor: "author",
                sortable: true,
                // ------------------------ using css --------------------------
                style: {
                  paddingBottom: "25px",
                  paddingTop: "20px",
                },
              },
              {
                Header: () => <h5 className="row-design">CREATED_AT</h5>,
                accessor: "created_at",
                sortable: true,
                filterable: true,
                // ------------------------ using css --------------------------
                style: {
                  paddingBottom: "25px",
                  paddingTop: "20px",
                },
              },
            ],
          },
          //------------------ ROW INFO IN TABLE----------------------------
          {
            columns: [
              {
                Header: () => <h5 className="row-design">ACTION</h5>,
                Cell: (props) => {
                  return (
                    <Link
                      to={{
                        pathname: "/",
                        data: props.original, //pass the data to rowOriginalDetails
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Row JSON Data
                      </Button>
                      <Dialog
                        fullWidth={fullWidth}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="max-width-dialog-title"
                      >
                        {/* ================== JSON FORMAT AND MODAL ===================== */}
                        <DialogContent>
                          <h2 style={{ color: "purple" }}>Raw JSON DATA</h2>

                          {JSON.stringify(props.original)}
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} style={{ color: "purple"}}>
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Link>
                  );
                },
              },
            ],
          },
        ]}
        defaultPageSize={10} //set the page number
        className="-striped -highlight"
        noDataText={loading} //display the loading... on the screen
        sortable={true} // sortable
        // filterable={true} // searching column
      />
    </div>
  );
};

export default FetchPostDetails;
