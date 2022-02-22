import { commands, workspace } from 'coc.nvim'

export async function goplsTidy() {
  const doc = await workspace.document
  await commands.executeCommand('gopls.tidy', { URIs: [doc.uri] })
}

export async function goplsGcDetails() {
  const doc = await workspace.document
  await commands.executeCommand('gopls.gc_details', doc.uri)
}
