import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileRequest } from '../../store/modules/user/actions'
import { signOut } from '../../store/modules/auth/actions'
import { Container } from './styles'
import AvatarInput from './AvatarInput'

export default function Profile() {
  const profile = useSelector((state) => state.user.profile)
  const dispatch = useDispatch()
  
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  )
}
