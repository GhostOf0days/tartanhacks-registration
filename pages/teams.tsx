import { Hidden, makeStyles, Typography, Snackbar } from "@material-ui/core"
import React, {
  ReactElement,
  FunctionComponent,
  useEffect,
  useState
} from "react"
import { useDispatch, useSelector } from "react-redux"
import actions from "src/actions"
import { useRouter } from "next/dist/client/router"
import { AuthenticatedLayout } from "src/layouts";
import { viewTeams } from "src/actions/teams"
import WaveFooter from "src/components/design/WaveFooter"
import ScottyLabsHeader from "src/components/design/ScottyLabsHeader"
import EnvelopeEmpty from "src/components/design/EnvelopeEmpty"
import RoundedButton from "src/components/design/RoundedButton"
import FloatingDiv from "src/components/design/FloatingDiv"
import TeamTableEntry from "src/components/teams/TeamTableEntry"
import ContentHeader from "src/components/design/ContentHeader"
import { Alert } from "@material-ui/lab"
import Notification from "src/components/design/Notification"
import { isAssetError } from "next/dist/client/route-loader"
import { RootState } from "types/RootState"

const useStyles = makeStyles((theme) => ({
  newTeamButton: {
    width: "45%",
    fontSize: "30px",
    fontWeight: 600,
    alignSelf: "center",
    textTransform: "uppercase",
    borderRadius: "10px",
    background: theme.palette.gradient.end,
    color: "#FFFFFF",
    [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
      fontSize: "25px",
      width: "60%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      fontSize: "16px",
      width: "75%",
    }
  },
  tableHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "35px",
  },
  tableBody: {
    display: "grid",
  },
  tableData: {
    tableLayout: "fixed",
    width: "100%",
    textAlign: "left",
    borderCollapse: "separate",
    borderSpacing: "0 33px"
  },
  tableEntry: {
    display: "block",
    width: "100%",
  },
  tableHeaderText: {
    fontWeight: 400,
    backgroundColor: theme.palette.gradient.start,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "28px",
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      fontSize: "20px",
    },
  },
  link: {
    background: "none",
    border: "none",
    textDecoration: "underline",
    cursor: "pointer"
  },
  buttonForm: {
    display: "inline-flex",
    justifyContent: "center"
  }
}))

const ViewTeams = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [teams, setTeams] = useState([{
    name: "",
    description: ""
  }])
  const [notify, setNotify] = useState({ 
    isOpen: false, 
    message: '', 
    type: '' 
  })
  const classes = useStyles()

  const errorMessage = useSelector((state: RootState) => state?.teams?.error)
  

  const checkJoinErrorCallback = ((isError: boolean) => {
    setNotify({
      isOpen: true,
      message: isError ? '' : 'Join request sent',
      type: isError ? 'error' : 'success'
    });
  })

  useEffect(() => {
    const getTeams = async () => {
      try {
        const viewTeams = await dispatch(actions.teams.viewTeams());
        setTeams(viewTeams.data);
      } catch (err) {
        setNotify({
          isOpen: true,
          message: '',
          type: 'error'
        });
      }
    }
    getTeams();
  }, [])

  if(notify.type === 'error') {
    notify.message = errorMessage;
  }

  return (
    <>
      <div>
        <ScottyLabsHeader />
        <WaveFooter />
        <FloatingDiv>
          <ContentHeader title="Team" />
          <form className={classes.buttonForm} onClick={async (e) => {
            e.preventDefault();
            router.push("/teams/create")
          }}>
            <RoundedButton type="submit" className={classes.newTeamButton}>
              Create new team
            </RoundedButton>
          </form>
          <div className={classes.tableHeader}>
            <Typography variant="h4" className={classes.tableHeaderText}>
              VIEW OPEN TEAMS
            </Typography>
            <button className={classes.link} onClick={
              (e) => {
                console.log("filtered");
              }
            }>
              <Typography variant="h4" className={classes.tableHeaderText}>
                Filter
              </Typography>
            </button>
          </div>
          <table className={classes.tableData}>
            <tbody>
              {teams.map((team, idx) => <TeamTableEntry
                team={team} key={idx} callback={checkJoinErrorCallback} />)}
            </tbody>
          </table>
        </FloatingDiv>
      </div>
      <Notification
        notify={notify}
        setNotify={setNotify}
      />
    </>
  )
}

export default AuthenticatedLayout(ViewTeams);
