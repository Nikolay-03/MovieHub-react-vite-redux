import {Button} from "@/shared/ui";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
interface IAddToWatchList{
    className?:string
}
export const AddToWatchList = (props) => {
    const {className} = props
    return (
        <Button onClick={() => console.log(1)} Icon={BookmarkBorderIcon} className={className}>
            Add to watchlist
        </Button>
    );
};

