import {
  ConfigBase,
  extendConfigSchema,
  SchemaUnwrap,
} from '@lastos/page-spy-base/dist/config';

const schema = extendConfigSchema((z) => {
  return z.object({});
});

export type InitConfig = SchemaUnwrap<typeof schema>;

export class Config extends ConfigBase<InitConfig> {
  protected schema = schema;

  platform = {};
}
