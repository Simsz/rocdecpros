"use client"

import {
  Portal,
  Box,
  CloseButton,
  Flex,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"

export const toaster = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  show: (props: { title?: string; description?: string; status?: 'info' | 'warning' | 'success' | 'error' | 'loading'; duration?: number }) => {
    // This is just a placeholder for the actual implementation
    // The real implementation will be handled by Chakra UI's useToast
    return { id: Math.random().toString() }
  },
  close: () => {
    // Placeholder
  },
}

export const Toaster = () => {
  const [toasts, setToasts] = useState<Array<{ id: string; title?: string; description?: string; status?: string }>>([])
  
  // This is a simplified implementation
  // In a real app, you would want to sync this with the toaster object
  
  return (
    <Portal>
      <Flex 
        position="fixed" 
        bottom="4" 
        right="4" 
        flexDirection="column" 
        gap="2"
        zIndex="toast"
      >
        {toasts.map((t) => (
          <Box 
            key={t.id}
            p={3}
            bg="white" 
            boxShadow="md" 
            borderRadius="md" 
            maxWidth="sm"
          >
            <Flex justify="space-between" align="center">
              {t.title && <Text fontWeight="bold">{t.title}</Text>}
              <CloseButton onClick={() => {
                setToasts(prev => prev.filter(toast => toast.id !== t.id))
              }} />
            </Flex>
            {t.description && <Text mt={1}>{t.description}</Text>}
          </Box>
        ))}
      </Flex>
    </Portal>
  )
}
