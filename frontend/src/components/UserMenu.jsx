import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { logout } from '../lib/api'

const UserMenu = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate: signOut } = useMutation({
    mutationFn: logout,
    onSettled: () => {
      queryClient.clear()
      navigate('/login', { replace: true })
    }
  })

  return (
    <Menu isLazy placement={'bottom-start'}>
      <MenuButton position={'absolute'} right={'1.5rem'} top={'1.5rem'}>
        <Avatar src='#' size={'sm'} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate('/home')}>Home</MenuItem>
        <MenuItem onClick={() => navigate('/posts')}>Posts</MenuItem>
        <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
        <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
        <MenuItem onClick={signOut}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserMenu
