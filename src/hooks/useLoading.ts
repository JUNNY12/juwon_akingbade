import { useState } from "react";
import { UseLoadingReturnType } from "../../type";

export const useLoading = ():UseLoadingReturnType => {
        const [isLoading, setIsLoading] = useState<Boolean>(false)
    
        return {isLoading, setIsLoading}
}