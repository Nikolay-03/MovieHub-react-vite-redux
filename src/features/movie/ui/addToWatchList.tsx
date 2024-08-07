import {Button} from "@/shared/ui";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
interface IAddToWatchList{
    className?:string
}
export const AddToWatchList = (props:IAddToWatchList) => {
    const {className} = props
    return (
        <Button Icon={BookmarkBorderIcon} className={className}>
            Add to watchlist
        </Button>
    );
};

