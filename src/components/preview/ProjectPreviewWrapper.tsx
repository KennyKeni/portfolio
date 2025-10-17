import type { Project } from '@/types/portfolio';
import { ProjectPreview } from './ProjectPreview';

export function createProjectPreviewComponent(project: Project): React.ComponentType {
  return function ProjectPreviewWrapper() {
    return <ProjectPreview project={project} />;
  };
}
