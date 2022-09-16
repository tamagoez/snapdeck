import * as ReactDOM from 'react-dom/client'
import { createStandaloneToast } from '@chakra-ui/toast'
const { ToastContainer, toast } = createStandaloneToast()

export function errorToast(title: string, description: string, duration: number, isClosable: boolean) {
    toast({
        title: title,
        description: description,
        status: 'error',
        duration: duration,
        isClosable: isClosable,
    })
}

export function successToast(title: string, description: string, duration: number, isClosable: boolean) {
    toast({
        title: title,
        description: description,
        status: 'success',
        duration: duration,
        isClosable: isClosable,
    })
}