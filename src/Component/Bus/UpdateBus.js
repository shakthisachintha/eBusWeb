import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default  class UpdateBusForm extends React.Component {



    render() {
        return(
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Bus Details</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    
                    </DialogContentText>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busNo"
                            label="Bus Number"
                            name="busNo"
                            autoComplete="BusNo"
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busRoute"
                            label="Bus Route"
                            name="busRoute"
                            autoComplete="Bus Route"    
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busCapacity"
                            label="Bus Capacity"
                            name="busCapacity"
                            autoComplete="Bus Capacity"
                        />
                    </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Update
                </Button>
                </DialogActions>
            </Dialog>
        )
    }

}
