import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from "./AppModel.module.css"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Fab from '@mui/material/Fab';
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect, useState } from 'react';
import validator from 'validator';
import { useAlert } from 'react-alert'
import { SocialIcon } from 'react-social-icons';

export default function AppModel() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [classTag, setClassTag] = useState("")
    const alert = useAlert()

    // const [isNewUser, setIsNewUser] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            if (!open) {
                setOpen(true)
            }
        }, 10 * 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setClassTag("animate-bounce")
        setOpen(false);
        let timer = setTimeout(() => {
            setClassTag("")
        }, 0.5 * 1000);
    };

    const handleSubscribe = async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({ email: email })
        };

        const isEmail = validator.isEmail(email);
        setError(!isEmail)
        if (isEmail) {
            setLoading(true)
            try {
                const response = await fetch('https://hackx-coming-soon-2022.vercel.app/api/hello', options);
                setLoading(false)
                setOpen(false)
                console.log(response.status)
                if (response.status == 200) {
                    alert.success('Let you know when we open Registration')

                } else {
                    alert.error("Some thing went Wrong")
                }

            } catch (error) {
                setLoading(false)
                setOpen(false)
                alert.error("Some thing went Wrong")
            }
        }
        setEmail("")
    }

    return (
        <div>
            <div className="fixed bottom-0 right-0 m-4 flex space-x-2">
                <SocialIcon className={`cursor-pointer ${classTag}`} onClick={handleClickOpen} network='email' />

            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <b>You can subscribe to our email, and let you know when we are open registration</b>
                    </DialogContentText>
                    <TextField
                        error={error}
                        helperText={error ? " Enter Valid Email" : null}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' color="error" onClick={handleClose}>Cancel</Button>
                    {/* <Button variant='outlined' color="success" onClick={handleSubscribe}>Subscribe</Button> */}
                    <LoadingButton
                        onClick={handleSubscribe}
                        loading={loading}
                        variant="outlined"
                        color="success"
                    >
                        Subscribe
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
