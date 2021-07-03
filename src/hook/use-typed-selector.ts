import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state/root.reducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
