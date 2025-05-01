import type { Props } from '@simon_he/git-fork-vue'
import gitForkVue from '@simon_he/git-fork-vue'
import { applyVueInReact } from 'veaury'

export const GitForkReact = applyVueInReact(gitForkVue) as React.ComponentType<Props>
