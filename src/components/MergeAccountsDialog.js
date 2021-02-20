import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

export default function MergeAccountsDialog({ open, onClose }) {
  const mergeAccounts = async () => {
    console.log('merging');
    close();
  };
  const close = () => {
    setMergeCheck('');
    onClose();
  };
  const [mergeCheck, setMergeCheck] = useState('');
  const disabled = mergeCheck.toLowerCase() !== 'merge';
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to merge accounts?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <b>WARNING</b>: This action may break apps that depend on your
          accounts.
        </DialogContentText>
        <DialogContentText>
          Merging accounts will deduplicate any accounts that share the same
          mint, sending all tokens to the{' '}
          <Link
            href={'https://spl.solana.com/associated-token-account'}
            target="_blank"
            rel="noopener"
          >
            associated token account
          </Link>
          . If no such account exists, then one will be made.
        </DialogContentText>
        <TextField
          label={`Please type "merge" to confirm`}
          fullWidth
          variant="outlined"
          margin="normal"
          value={mergeCheck}
          onChange={(e) => setMergeCheck(e.target.value.trim())}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Cancel
        </Button>
        <Button
          disabled={disabled}
          onClick={mergeAccounts}
          color="secondary"
          autoFocus
        >
          Merge
        </Button>
      </DialogActions>
    </Dialog>
  );
}
