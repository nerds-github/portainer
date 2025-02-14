import { InlineLoader } from '@@/InlineLoader';
import { WebEditorForm } from '@@/WebEditorForm';

export function DockerContentField({
  error,
  onChange,
  readonly,
  value,
  isLoading,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  readonly?: boolean;
  isLoading?: boolean;
}) {
  if (isLoading) {
    return <InlineLoader>Loading stack content...</InlineLoader>;
  }

  return (
    <WebEditorForm
      id="stack-creation-editor"
      value={value}
      onChange={onChange}
      type="yaml"
      placeholder="Define or paste the content of your docker compose file here"
      error={error}
      readonly={readonly}
      data-cy="stack-creation-editor"
    >
      You can get more information about Compose file format in the{' '}
      <a
        href="https://docs.docker.com/compose/compose-file/"
        target="_blank"
        rel="noreferrer"
      >
        official documentation
      </a>
      .
    </WebEditorForm>
  );
}
