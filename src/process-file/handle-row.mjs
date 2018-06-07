import createWriter from './create-writer';

export const handleRowValid = (ctx, data) => {
  if (!ctx.validWriter) ctx.validWriter = createWriter(ctx.validPath);
  ctx.valid++;
  ctx.validWriter.write(data);
};

export const handleRowInvalid = (ctx, data) => {
  if (!ctx.invalidWriter) ctx.invalidWriter = createWriter(ctx.invalidPath);
  ctx.invalid++;
  ctx.invalidWriter.write(data);
};

export const handleRow = (ctx, data) => {
  ctx.rows++;
  if (ctx.rows === 0) return; // skip headers
  if (data.length === ctx.fieldCount) {
    handleRowValid(ctx, data);
  } else {
    handleRowInvalid(ctx, data);
  }
}

export default handleRow;
