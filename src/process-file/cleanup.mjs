export default async ctx => {
  if (ctx.reader) {
    try { ctx.reader.destroy(); } catch(_) {}
    delete ctx.reader;
  }
  if (ctx.validWriter) {
    try {
      ctx.validWriter.output.end(); 
      await ctx.validWriter.finish;
    } catch(err) {
      console.error('Error closing validWriter', err)
    }
    delete ctx.validWriter;
  }
  if (ctx.invalidWriter) {
    try {
      ctx.invalidWriter.output.end(); 
      await ctx.invalidWriter.finish;
    } catch(err) {
      console.error('Error closing invalidWriter', err)
    }
    delete ctx.invalidWriter;
  }
  return ctx;
};
